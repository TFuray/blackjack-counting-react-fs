import Table from "react-bootstrap/Table"

const DogTable = () => {
  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Note</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  )
}
export default DogTable
