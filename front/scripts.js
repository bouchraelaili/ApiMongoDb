//GetSubscriber
function GetSubscriber() {
    var table = document.getElementById('subTable');
    var html = "";
    axios.get('http://localhost:3000/subscribers')
.then(function (response) {
  for (let index = 0; index < response.data.length; index++) {
      html +=`
      <tr>
                <td>${response.data[index].name}</td>
                <td>${response.data[index].subscribertochannel}</td>
                <td><button class="btn btn-success" onclick="updatesub('${response.data[index]._id}')"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i>Update</button>
                <button class="btn btn-danger" onclick="deleteSub('${response.data[index]._id}')"><i class="fa fa-trash fa-lg" aria-hidden="true"></i>Delete</button></td>
            </tr>
      `
   
  }

  table.innerHTML = html
})
}

// post sub


function send() {
    var namee = document.getElementById('Name').value;
var subscribertochannel = document.getElementById('subscribertochannel').value;
    obj = {
        name : namee,
        subscribertochannel : subscribertochannel
    }
    console.log(obj);

    axios.post('http://localhost:3000/subscribers',obj)
      .then(function (response) {
        console.log(response);
        window.location.href='./list.html'
      })
      .catch(function (error) {
        console.log(error);
      });
    
   

}

//update
function updatesub(id) {

    var nameup = document.getElementById('Name').value;
var subscribertochannelup = document.getElementById('subscribertochannel').value;
    obj = {
        name : nameup,
        subscribertochannel : subscribertochannelup
    }
    console.log(obj);
    
        axios.patch('http://localhost:3000/subscribers/' +id ,obj)
          .then(function (response) {
            console.log(response);
            window.location.href='./list.html'
          })
          .catch(function (error) {
            console.log(error);
          });
    
   
  
  }

  // delete sub by id

function deleteSub(id) {
    axios.delete('http://localhost:3000/subscribers/'+ id)
    .then(function (response) {
      window.location.href='./list.html'
        return confirm('Are you sure you want to deleted?');
      })
      .catch(function (error) {
        console.log(error);
      });
    
}
function confirmation() {
}