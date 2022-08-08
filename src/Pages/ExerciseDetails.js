import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {exerciseOptions, fetchData , youTubeSearchOptions} from "../utils/FetchData"
import {Box} from "@mui/material"
import Details from '../component/Details'
import ExerciseVideos from '../component/ExerciseVideos'
import SimilarVideos from '../component/SimilarVideos'

const ExerciseDetails = () => {

  const [exerciseDetails, setExerciseDetails] = useState({})
  const [videosDetails, setVideosDetails] = useState([])
  const [targetExercise, setTargetExercise] = useState([])
  const [equipmentExercise, setEquipmentExercise] = useState([])

  const {id} = useParams()

  useEffect(() => {

    const fetchExerciseDetails = async () => {

      const exerciseDBUrl = "https://exercisedb.p.rapidapi.com"
      const exerciseVideosUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailsData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetails(exerciseDetailsData)

      const exerciseVideosData = await fetchData (`${exerciseVideosUrl}/search?query=${exerciseDetailsData.name}`, youTubeSearchOptions)

      setVideosDetails(exerciseVideosData.contents)

      const targetExerciseData = await fetchData(`${exerciseVideosUrl}/exercises/target/${exerciseDetailsData.target}`, exerciseOptions)
      setTargetExercise(targetExerciseData)


      const equipmentExerciseData = await fetchData(`${exerciseVideosUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exerciseOptions)
      setEquipmentExercise(equipmentExerciseData)


    }

    fetchExerciseDetails();

  },[id])



  return (
    <div>
      <Details exerciseDetails = {exerciseDetails}/>
      <ExerciseVideos videosDetails = {videosDetails} name={exerciseDetails.name}/>
      <SimilarVideos targetExercise={targetExercise} equipmentExercise={equipmentExercise}   />
    </div>
  )
}

export default ExerciseDetails