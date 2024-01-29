<template>
  <form method="">
    <div id="select_container" class="d-flex justify-content-center align-items-center">
      <div class="col-md-6 mt-3 p-2">
        <label for="work_order">
          <div class="label_select">Select work order</div>
        </label>
        <select name="work_order" id="work_order" multiple>
          <option v-for="work_order in work_orders" :value="work_order.value">{{ work_order.name }}</option>      
        </select>
      </div>
      <div class="col-md-6 mt-3 p-2">
        <label for="group_name">
          <div class="label_select">Select group name</div>
        </label>
        <select name="group_name" id="group_name" class="form-select p-2">
          <option disabled selected value> -- select an option -- </option>
          <option v-for="group_name in group_names" :value="group_name.value">{{ group_name.name }}</option>
        </select>
      </div>
    </div>
    <div class="p-1">
      <button type="submit" class="btn btn-primary m-1" @click="callApi">Query <i class="bi bi-database-fill-check"></i></button>
      <button class="btn btn-success">Export Excel <i class="bi bi-file-earmark-spreadsheet-fill"></i></button>
      <button class="btn btn-danger m-1" @click="clearButton">Clear <i class="bi bi-x-circle-fill"></i></button>
    </div>
  </form>
  <div class="p-2 label_select">RESULT:</div>
  <div class="col-md-12 table_container mt-3">
    <table class="table table-striped table-bordered table-hover table-primary table-responsive custom-width">
      <thead>
        <tr>
          <th>NO</th>
          <th>PANEL_SN</th>
          <th>SERIAL_NUMBER</th>
          <th>MO_NUMBER</th>
          <th>CONFIG</th>
          <th>SN_SEQ</th>
          <th>LOCATION</th>
          <th>REEL_ID</th>
          <th>COMP_PART_NO</th>
          <th>LOT_NO</th>
          <th>DATE_CODE</th>
          <th>VENDOR</th>
          <th>APN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>HA5026110207Y6</td>
          <td>HMH22730HAJ17PK5Z</td>
          <td>1000112-VZR301</td>
          <td>VZR3</td>
          <td>1</td>
          <td>R2110</td>
          <td>TC-0220623-2989</td>
          <td>107S00328-01</td>
          <td>LM2111308</td>
          <td>20220422</td>
          <td>THIN FILM</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'WipQuery',
  data() {
    return {
      work_orders: [
        { name: '1002991-VYJ105', value: '1002991-VYJ105' },
        { name: 'Two', value: 'B' },
        { name: 'Three', value: 'C' },
        { name: 'Four', value: 'D' },
        { name: 'Five', value: 'E' },
        { name: 'Six', value: 'F' },
        { name: 'Seven', value: 'G' },
        { name: 'Eight', value: 'H' },
        { name: 'Nine', value: 'I' },
        { name: 'Ten', value: 'J' },
        { name: 'Eleven', value: 'K' },
        { name: 'Twelve', value: 'L' },
        { name: 'Thirteen', value: 'M' },
        { name: 'Fourteen', value: 'N' },
        { name: 'Fifteen', value: 'O' },
        { name: 'Sixteen', value: 'P' },
        { name: 'Seventeen', value: 'Q' },
        { name: 'Eighteen', value: 'R' },
        { name: 'Nineteen', value: 'S' },
        { name: 'Twenty', value: 'T' },
        { name: 'Twenty-one', value: 'U' },
        { name: 'Twenty-two', value: 'V' },
        { name: 'Twenty-three', value: 'W' },
        { name: 'Twenty-four', value: 'X' },
        { name: 'Twenty-five', value: 'Y' },
        { name: 'Twenty-six', value: 'Z' },
      ],
      group_names: [
        { name: 'AOI1-B', value: 'AOI1-B  ' },
        { name: 'Two', value: 'B' },
        { name: 'Three', value: 'C' },
        { name: 'Four', value: 'D' },
        { name: 'Five', value: 'E' },
        { name: 'Six', value: 'F' },
        { name: 'Seven', value: 'G' },
        { name: 'Eight', value: 'H' },
        { name: 'Nine', value: 'I' },
        { name: 'Ten', value: 'J' },
      ],
    };
  },
  mounted() {
    new MultiSelectTag('work_order')
  },
  methods: {
    callApi() {
      // let workOrder = document.getElementById('work_order').value;
      // console.log(workOrder);
      // let groupName = document.getElementById('group_name').value;
      // console.log(groupName);
      const data = {
        mo: '1002991-VYJ105',
        group_name: 'AOI1-B'
      };

      fetch('http://10.52.201.58:8000/wip_status/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
    },
    clearButton() {
      document.getElementById("work_order").value = "";
      document.getElementById("group_name").value = "";
    },
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.drawer, .rounded, .drawer .input-body .input, .form-select{
  border: 1px solid rgb(150, 148, 148)!important;
}
.input-container{
  border-right: 1px solid rgb(150, 148, 148)!important;
}
.label_select{
  font-size: 18px;
  font-weight: bold;
  color: #2b52c9;
}
.table_container{
  width: 100%;
  overflow-x: auto;
}
table{
  width: 100%;
  border-collapse: collapse;
}
</style>