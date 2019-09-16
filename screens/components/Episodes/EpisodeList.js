// this page should be like the "page" page in the react webpage 

import React from 'react';
import {EpisodeContext} from '../../../context/EpisodeContext'
import Episodes from './PrevEP'
export default class EpisodeList extends React.Component {
    state = {
        episdoes: []
    }
}

//getEpisdoes from databaase using componentWillMount

render() {
    return (
        <EpisodeContext.Provider 
        value={{
        }}>
            <View>
                <PrevEp></PrevEp>
            </View>
        </EpisodeContext.Provider>
    )
}