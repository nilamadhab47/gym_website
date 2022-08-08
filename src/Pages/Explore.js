import React, { useState } from 'react'
import Exercise from '../component/Exercise'
import SearchExercise from '../component/SearchExercise'

const Explore = () => {
    const [bodyPart, setBodyPart] = useState("all")
    const [exercises, setExercises] = useState([])
    return (
        <div>
            <SearchExercise
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercise
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}

            />
        </div>
    )
}

export default Explore