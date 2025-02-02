
export default function Preview({children, id}) {
  return (
    <>
        <input type="radio" name={`tab-name-${id}`} role="tab" className="tab" aria-label="Preview" defaultChecked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-sm">
            {children}
        </div>
    </>
  )
}