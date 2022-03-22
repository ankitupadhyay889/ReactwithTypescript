type Ips = {
    error?: Error
}

const Allinone = (props: Ips) => {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{props?.error?.message}</pre>
    </div>
  )
}
export default Allinone;