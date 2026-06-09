import axios from 'axios';

//criando uma instância do axios para configurar a baseURL e os headers padrão
const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Content-Type': 'application/json',
    },
});

function getGenerationById(id) {
    if (id <= 151) return 1
    if (id <= 251) return 2
    if (id <= 386) return 3
    if (id <= 493) return 4
    if (id <= 649) return 5
    if (id <= 721) return 6
    if (id <= 809) return 7
    if (id <= 905) return 8
    if (id <= 1025) return 9

    return null
}

export async function getPokemonList(limit) {
    const response = await http.get(`pokemon?limit=${limit}`)

    return await Promise.all(
        response.data.results.map(async pokemon => {
            const id = pokemon.url.split('/').filter(Boolean).pop()

            const detailsResponse = await http.get(`pokemon/${id}`)

            const types = detailsResponse.data.types.map(typeInfo => {
                const typeId = typeInfo.type.url.split('/').filter(Boolean).pop()

                return {
                    id: Number(typeId),
                    name: typeInfo.type.name,
                    icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/${typeId}.png`
                }
            })

            return {
                id,
                name: pokemon.name,
                url: pokemon.url,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                types,
                generation: getGenerationById(id),
            }
        })
    )
}

export async function getPokemonByID(id) {
    const response = await http.get(`pokemon/${id}`)
    const pokemon = response.data

    const speciesResponse = await http.get(`pokemon-species/${id}`)
    const species = speciesResponse.data

    const descriptionEntry = species.flavor_text_entries.find(entry => {
        return entry.language.name === 'en'
    })

    const description = descriptionEntry
        ? descriptionEntry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ')
        : 'Descrição não encontrada.'

    return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
        description: description,
        types: pokemon.types.map(typeInfo => {
            const typeId = typeInfo.type.url.split('/').filter(Boolean).pop()

            return {
                id: Number(typeId),
                name: typeInfo.type.name,
                icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/${typeId}.png`
            }
        })
    }
}

export async function getPokemonTypes() {
    try {
        const response = await http.get('type')

        const ignoredTypes = ['unknown', 'shadow', 'stellar'] //esses tipos não tem icone, então tava quebrando a aplicação

        //função para filtrar os tipos e criar o objeto com nome e ícone
        return response.data.results
            .filter(type => !ignoredTypes.includes(type.name))
            .map(type => {
                const id = type.url.split('/').filter(Boolean).pop()

                return {
                    name: type.name,
                    icon: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/small/${id}.png`
                }
            })

    } catch (error) {
        console.error('Erro ao obter os tipos de Pokémon:', error)
        throw error
    }
}

export async function getGenerations() {
    try {
        const response = await http.get('generation')

        return response.data.results.map(generation => {
            const id = generation.url.split('/').filter(Boolean).pop()

            return Number(id)
        })

    } catch (error) {
        console.error('Erro ao obter as gerações de Pokémon:', error)
        throw error
    }
}

