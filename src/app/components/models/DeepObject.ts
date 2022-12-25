import { CatalogingMapping } from "./CatalogingMapping";
import { ObservationParameters } from "./ObservationParameters";

export interface DeepObject {
    id: number,
    image: String,
    constelacao: String,
    nome: String,
    magnitude: number,
    catalogingMapping: CatalogingMapping[],
    observationParameters: ObservationParameters[]
}