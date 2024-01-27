<template>
<form method="">
    <div id="select_container" class="d-flex justify-content-center align-items-center">
      <div class="col-md-6 mt-3 p-2">
        <label for="">
          <div class="label_select">Type </div>
        </label><br>
        <input type="text" class="form-control" id="input_union">
      </div>
    </div>
    <div class="p-1">
      <button class="btn btn-primary m-1">Query <i class="bi bi-database-fill-check"></i></button>
      <button class="btn btn-success m-1">Export Excel <i class="bi bi-file-earmark-spreadsheet-fill"></i></button>
      <button class="btn btn-danger" @:click="clearButton">Clear <i class="bi bi-x-circle-fill"></i></button>
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
export default {
  methods: {
    clearButton() {
      document.getElementById("input_union").value = "";
    },
  },
}
</script>

<style>
#input_union{
  border: 1px solid rgb(150, 148, 148)!important;
}
</style>
