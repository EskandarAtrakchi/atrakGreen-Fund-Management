import { task, type HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "hardhat-abi-exporter";
import fs from "fs";
import path from "path";
import * as rimraf from "rimraf";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.26",
    settings: {
      // https://hardhat.org/hardhat-runner/docs/reference/solidity-support#support-for-ir-based-codegen
      viaIR: false, // change to true after hardhat update
    },
  },
  abiExporter: {
    path: "./abi",
  },
};

export default config;

task("export-abi").setAction(async (args, hre, runSuper) => {
  // call super to avoid overwriting functionality
  await runSuper();

  const abiDir = hre.config.abiExporter[0].path;
  const abiTsDir = "abi_ts";

  // delete "abi_ts" directory if it exists
  if (fs.existsSync(abiTsDir)) {
    rimraf.sync(abiTsDir);
  }

  // create empty "abi_ts" directory
  fs.mkdirSync(abiTsDir, { recursive: true });

  console.log(`Exporting ABIs to ${abiTsDir}...`);
  console.log(`ABI directory: ${abiDir}`);

  // read and process all files in "abi" directory, including subdirectories
  processDirectory(abiDir, abiTsDir);
});

function processDirectory(sourceDir: string, targetDir: string) {
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const nameWithoutExtension = entry.name.replace(/\.json$/, "");

    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, `${nameWithoutExtension}`);

    if (entry.isDirectory()) {
      // create corresponding subdirectory in target directory
      fs.mkdirSync(targetPath, { recursive: true });
      // recursively process the subdirectory
      processDirectory(sourcePath, targetPath);
    } else if (entry.isFile()) {
      // read file contents
      const fileContents = fs.readFileSync(sourcePath, "utf8");
      // apply transformations to file contents
      const transformedContents = transformAbi(
        nameWithoutExtension,
        fileContents
      );
      // write transformed contents to target directory
      fs.writeFileSync(`${targetPath}.ts`, transformedContents);
    }
  }
}

function transformAbi(name: string, abi: string) {
  const trimmedData = abi.endsWith("\n") ? abi.slice(0, -1) : abi;
  const transformedAbi = `const ${name} = ${trimmedData} as const;\nexport default ${name};`;
  return transformedAbi;
}
