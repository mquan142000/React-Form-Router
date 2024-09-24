import { Formik, Field, Form } from "formik";

const BasicForm = () => (
  <div>
    <h1>Đăng kí thông tin</h1>
    <Formik
      initialValues={{
        yourName: "",
        yourPhone: "",
        yourAddress: ""
      }}
      onSubmit={async values => {
        if (!Number(values.yourPhone)) {
          alert("Số điện thoại chỉ được nhập số");
        } else alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="yourName">Name</label>
        <Field
          id="yourName"
          name="yourName"
          type="text"
          placeholder="Nhập tên"
        />

        <label htmlFor=" yourPhone">Phone</label>
        <Field
          id="yourPhone"
          name="yourPhone"
          type="text"
          placeholder="Nhập sdt"
        />
        <label htmlFor="yourAddress">Address</label>

        <Field
          id="yourAddress"
          name="yourAddress"
          type="text"
          placeholder="Nhập địa chỉ"
        />
        <button type="submit">Đăng kí</button>
      </Form>
    </Formik>
  </div>
);

export default BasicForm;