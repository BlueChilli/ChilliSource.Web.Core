import {SpecificShallowEqualGuard} from "../src/createSpecificShallowEqual"

declare module "cs.core"{
    export function createSpecificShallowEqual<TProps extends SpecificShallowEqualGuard> (...keysToTest: (keyof TProps)[]) : (currentProps: TProps, nextProps: TProps) => boolean
}