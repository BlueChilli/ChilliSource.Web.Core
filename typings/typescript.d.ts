import {SpecificShallowEqualType} from "../src/createSpecificShallowEqual"

declare module "cs.core"{
    export function createSpecificShallowEqual<TProps> (...keysToTest: (keyof TProps)[]) : (currentProps: SpecificShallowEqualType<TProps>, nextProps: SpecificShallowEqualType<TProps>) => boolean
}