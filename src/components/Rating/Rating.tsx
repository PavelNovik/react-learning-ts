import React from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingType
    changeRating: (value: RatingType) => void
}

export function Rating(props: RatingPropsType) {
    // console.log('Rating rendering')
    return (
        <div>
            <Star onClick={() => props.changeRating(1)} selected={props.value > 0}/>
            <Star onClick={() => props.changeRating(2)} selected={props.value > 1}/>
            <Star onClick={() => props.changeRating(3)} selected={props.value > 2}/>
            <Star onClick={() => props.changeRating(4)} selected={props.value > 3}/>
            <Star onClick={() => props.changeRating(5)} selected={props.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    // console.log('Star rendering')
    return <span onClick={props.onClick}> {props.selected ? <b>Star </b> : "Star "}</span>
}
