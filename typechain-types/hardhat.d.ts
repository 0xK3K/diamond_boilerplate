/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Diamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Diamond__factory>;
    getContractFactory(
      name: "DiamondInit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondInit__factory>;
    getContractFactory(
      name: "DiamondCutFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondCutFacet__factory>;
    getContractFactory(
      name: "DiamondLoupeFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamondLoupeFacet__factory>;
    getContractFactory(
      name: "OwnershipFacet",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnershipFacet__factory>;
    getContractFactory(
      name: "IDiamondCut",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondCut__factory>;
    getContractFactory(
      name: "IDiamondLoupe",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamondLoupe__factory>;
    getContractFactory(
      name: "IERC173",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC173__factory>;
    getContractFactory(
      name: "LibDiamond",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LibDiamond__factory>;

    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Diamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Diamond>;
    getContractAt(
      name: "DiamondInit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondInit>;
    getContractAt(
      name: "DiamondCutFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondCutFacet>;
    getContractAt(
      name: "DiamondLoupeFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamondLoupeFacet>;
    getContractAt(
      name: "OwnershipFacet",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnershipFacet>;
    getContractAt(
      name: "IDiamondCut",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamondCut>;
    getContractAt(
      name: "IDiamondLoupe",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamondLoupe>;
    getContractAt(
      name: "IERC173",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC173>;
    getContractAt(
      name: "LibDiamond",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LibDiamond>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
