import React, {useContext} from 'react';
import LanguageContext  from '../../../Context/index';
import WhatItIs from './WhatItIs';
import Stores from './Stores';
import Us from './Us';
/* import News from './News'; */

export default function Body(props) {

    const { texts } = useContext(LanguageContext);

    return (
        <div>
            <WhatItIs 
                edit={props.edit} 
                title={texts.HEADER_BUTTON}
                subtitle={texts.WHATISIT_SUBTITLE}
                text={texts.WHATISIT_TEXT}
                subtitle2={texts.WHATISIT_SUBTITLE2}
                text2={texts.WHATISIT_TEXT2}
                />
            <Stores 
                edit={props.edit}
                title={texts.STORES_TITLE}
                text={texts.STORES_TEXT}
            />
            <Us 
                edit={props.edit} 
                />
            {/* <News 
                edit={props.edit}
            /> */}
        </div>
    )
}
