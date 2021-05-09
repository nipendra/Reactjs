// STAR MATCH - Starting Template
import React, { useState, useEffect } from 'react';
import './StarMatch.css';

const PlayNumber = (props) => {
    return (
        <button 
            style={{backgroundColor: colors[props.status]}}
            className="number"
             onClick={() => props.onClick(props.number)}
        >
             {props.number}
        </button>
    )
};

const PlayAgain = (props) => {
    return (
        <button onClick={props.onClick}>Play Again</button>
    )
}

const StartDisplay = (props) => {

    return (
        <>
        { utils.range(1,props.Stars).map(star => <div key={star} className="star" />)}
        </>
    )
};
const StarMatch = () => {
    const [Stars, setStars] = useState(utils.random(1,9));
    const [AvailableNums, setAvailableNums] = useState(utils.range(1,9));
    const [CandidateNums, setCandidateNums] = useState([]);
    const [secondLeft, setSecondLeft] = useState(10);
    useEffect(() => {
        if(secondLeft>0){
            setTimeout(() => {
                setSecondLeft(secondLeft-1);
            },1000);
        }
    })

    const candidateAreWrong = utils.sum(CandidateNums)>Stars;
    const numberStatus = (number) => {
        if(!AvailableNums.includes(number)){
            return 'used';
        }
        if(CandidateNums.includes(number)){
            return candidateAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    }
    const onNumberClick = (number, currentStatus) => {
        if(currentStatus ==='used')
            return ;
        
            const newCandidates = CandidateNums.concat(number);

            if(utils.sum(newCandidates)!==Stars) {
                setCandidateNums(newCandidates);
            }
            else {
                const newAvailableNums = AvailableNums.filter(
                     n => !newCandidates.includes(n)
                );

                setStars(utils.randomSumIn(newAvailableNums,9));
                setAvailableNums(newAvailableNums);
                setCandidateNums([]);
            }

    
    }
    const ResetGame = () =>{
        setStars(utils.random(1,9));
        setAvailableNums(utils.range(1,9));
        setCandidateNums([]);
    }
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
         {
              AvailableNums.length ===0 ? (
                  <PlayAgain onClick={ResetGame}/>
              ) :
               (<StartDisplay Stars={Stars}/>)
         }
         
        </div>
        <div className="right">
            {
                utils.range(1,9).map(number =>  
                <PlayNumber 
                    status={numberStatus(number)}
                    key={number} 
                    number={number}
                    onClick={onNumberClick}
                />)
            }
        </div>
      </div>
      <div className="timer">Time Remaining: {secondLeft}</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

// Math science
const utils = {
  // Sum an array
  sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

export default StarMatch;