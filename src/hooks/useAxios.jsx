import React, {useState} from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';


const useAxios = () => {
    const [cards, setCards] = useState([])
    const addCard = async () => {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/')
        setCards(cards => [...cards, 
        {...response.data, id: uuid()}])
    }
    return [cards, addCard]

}

export default useAxios;
