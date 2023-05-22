import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import Loader from "../components/Loader.jsx"
import { useGetDogsQuery } from "../slices/dogApiSlice"

let DogList = ({ dog }) => {
  return (
    <tr key={dog._id}>
      <td>
        {dog.dogName}<br/> Breed: <span style={{color:'red'}}>{dog.dogBreed}</span>
      </td>
      <td></td>
      <td>{dog.user}</td>
    </tr>
  )
}

const DogTable = () => {
  const { userInfo } = useSelector((state) => state.auth)

  const { data: dogs, isLoading, isSuccess, isError, error } = useGetDogsQuery()

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = dogs.map((dog) => (
      <DogList
        key={dog._id}
        dog={dog}
      />
    ))
  } else if (isError) {
    content = <>{error.toString()}</>
  }

  return (
    <>
      <h2>{userInfo.name}'s Dogs:</h2>

      <Table
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th>Name & Breed</th>
            <th>Note</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {content}
        </tbody>
      </Table>
    </>
  )
}
export default DogTable
