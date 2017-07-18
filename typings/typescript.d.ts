import {SpecificShallowEqualType} from "../src/createSpecificShallowEqual"
import {Iterable, List, Map} from "immutable";
import {Moment} from "moment";
import {Action} from "redux";

declare module "cs.core"{
    export function createSpecificShallowEqual<TProps> (...keysToTest: (keyof TProps)[]) : (currentProps: SpecificShallowEqualType<TProps>, nextProps: SpecificShallowEqualType<TProps>) => boolean
}