// em um novo arquivo `services/googlePlacesService.ts`

import axios from "axios";
import googlePlacesAPI from "./googlePlaces";

export async function getAutocompletePlaces(input: string) {
  try {
    const response = await axios.get("/api/autocomplete", {
      params: {
        input: input,
      },
    });

    return response.data.predictions.slice(0, 10); // pegando os top 10 resultados
  } catch (error) {
    console.error(error);
  }
}

export async function getPlaceDetails(placeId: string) {
  try {
    const response = await axios.get("/api/placesDetails", {
      params: {
        place_id: placeId,
      },
    });

    return response.data.result; // retorna os detalhes do lugar
  } catch (error) {
    console.error(error);
  }
}
