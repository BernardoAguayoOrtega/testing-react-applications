export const CustomerForm = ({ firstName }) => (
  <form id="customer" >
    <label htmlFor="firstName">First name</label>
    <input id='firstName' type="text" name="firstName" value={firstName} readonly/>
  </form>
)