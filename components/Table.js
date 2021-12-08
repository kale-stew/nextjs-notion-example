export const Table = ({ data }) => {
  // Map over data keys to create sanitized headers, removing unwanted columns
  const headers = Object.keys(data[0]).filter(
    (header) => !['id', 'date_created'].find((el) => el == header)
  )

  return (
    <table>
      <tbody>
        <tr>
          {headers.map((header) => (
            <th>{header.toUpperCase()}</th>
          ))}
        </tr>
        <tr>
          <td>Data</td>
        </tr>
      </tbody>
    </table>
  )
}
