export const Table = ({ data }) => {
  // Use this variable to sanitize headers & rows
  const alwaysExclude = ['id', 'date_created']

  const headers = Object.keys(data[0]).filter(
    (header) => !alwaysExclude.find((el) => el == header)
  )

  const buildTableRow = (key, item) => {
    if (alwaysExclude.find((el) => el == key)) {
      // Sanitize rows to exclude extra data
      return
    }
    return <td>{item[key]}</td>
  }

  return (
    <table>
      <tbody>
        <tr>
          {headers.map((header) => (
            <th>{header.toUpperCase()}</th>
          ))}
        </tr>
        {data.map((item, i) => (
          <tr>{Object.keys(item).map((key) => buildTableRow(key, item))}</tr>
        ))}
      </tbody>
    </table>
  )
}
