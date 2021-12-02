import React, {useState, useContext, createContext} from 'react';
import { Title } from './Card';

export const FeatureContext = createContext();

export default function Card({children, ...restProps}){
    const [showFeature, setShowFeature] = useState(false);
    const [MovieFeature, setMovieFeature] = useState({});

    return (
        <FeatureContext.Provider 
        value={{showFeature, setShowFeature, MovieFeature, setMovieFeature}}
        >
        <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = function CardGroup({children, ...restProps}) {
    return <Group { ...restProps}> {children}</Group>;
}

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title { ...restProps}> {children}</Title>;
}

Card.SubTitle = function CardSubTitle({children, ...restProps}) {
    return <SubTitle { ...restProps}> {children}</SubTitle>;
}

Card.Entities = function CardEntities({children, ...restProps}) {
    return <Entities
 { ...restProps}> {children}</Entities>
;
}

Card.Meta = function CardMeta({children, ...restProps}) {
    return <Meta { ...restProps}> {children}</Meta>;
}

Card.Item = function CardItem({children, ...restProps}) {
    return <Item 
    onClick={() => {
        setMovieFeature(item);
        setShowFeature(true);
    }}
        { ...restProps}> {children}</Item>;

}

Card.Image = function CardImage({...restProps}) {
    return <Image { ...restProps}></Image>;
}