interface DeepObject {
    id: number
    image: String
    constelacao: String
    nome: String
    magnitude: number
    catalogingMapping: CatalogingMapping[]
    observationParameters:ObservationParameters[]
}