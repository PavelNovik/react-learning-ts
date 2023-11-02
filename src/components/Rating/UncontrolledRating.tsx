import React, {useState} from 'react';

export type StarValueType = 0 | 1 | 2 | 3 | 4 | 5

const UncontrolledRatingS = () => {
    const [starValue, setStarValue] = useState<StarValueType>(0)
    console.log('unc rating')
    return (
        <div>
            <Star onClick={() => setStarValue(1)} selected={starValue > 0}/>
            <Star onClick={() => setStarValue(2)} selected={starValue > 1}/>
            <Star onClick={() => setStarValue(3)} selected={starValue > 2}/>
            <Star onClick={() => setStarValue(4)} selected={starValue > 3}/>
            <Star onClick={() => setStarValue(5)} selected={starValue > 4}/>
        </div>
    );
};
export const UncontrolledRating = React.memo(UncontrolledRatingS)

type StarPropsType = {
    selected: boolean
    onClick: () => void
}


const Star = React.memo(StarS)
function StarS(props: StarPropsType) {
    console.log('star un')
    return (
        <span onClick={props.onClick}>
            {props.selected ? <b>Star </b> : "Star  "}
        </span>
    )


}

// export default UncontrolledRating;