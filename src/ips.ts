import os from "os";
import { compose } from "./fp";

/** 获取网卡集合对象 */
export const getInterfaces = () => os.networkInterfaces();

export const getIpv4OfArray = (payload: any[]) =>
  payload.filter((d) => d.family == "IPv4");

/**
 * {
 * key:[{}],
 * key:[{}]
 * }
 * =>
 * [
 * {},
 * {}
 * ]
 * @param input
 */
export const Obj2Array = (input: any) => {
  const arr: any[] = [];

  Object.keys(input).forEach((key) => arr.push(...input[key]));

  return arr;
};

/**
 * [
 * {
 * address:''
 * }
 * ]
 * =>
 * [
 * ''
 * ]
 *
 */
export const getAddressFromArray = (i: any[]): string[] =>
  i.map((d) => d.address);

const printlog = (i: any) => {
  console.log(i);

  return i;
};

export const ipv4StringArray = (): string[] => {
  const c = compose(Obj2Array, getIpv4OfArray, getAddressFromArray);

  return c(getInterfaces());
};
