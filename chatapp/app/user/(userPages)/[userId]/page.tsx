
type props = {
    params: {
        userId: string
    }
}
function userDetaiks({params: {userId}}:props) {
  return (
    <div>{userId}</div>
  )}

export default userDetaiks