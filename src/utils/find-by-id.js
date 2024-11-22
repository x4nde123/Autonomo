
export const findById = (data, id) => {
  return data?.find(item => item.id == id) ?? []
}