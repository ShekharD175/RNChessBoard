import { ALL_MOVES, KINGSPAWN, QUEENPAWN, RETI, ENGLISH, KINGSFIANCHETTO} from '../utils/constants';
import { allAvatars } from './avatars';

export const getRandomMove = () => {
    const randomMove = getRandomItem(ALL_MOVES);    
    let result = [...allAvatars]
    switch (randomMove) {
        case KINGSPAWN: {
            result[36] = result[52]
            result[52] = null
        }
        break;
        case QUEENPAWN: {            
            result[35] = result[51]
            result[51] = null
        }
        break;

        case RETI: {
            result[47] = result[62]
            result[62] = null
        }
        break;

        case ENGLISH: {
            result[34] = result[50]
            result[50] = null
        }
        break;

        case KINGSFIANCHETTO: {
            result[46] = result[54]
            result[54] = null
        }
        break;

        default:  
        break;
    }    
    return result;
}

const getRandomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
}