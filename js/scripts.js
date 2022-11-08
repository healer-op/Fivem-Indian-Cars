fetch('https://script.google.com/macros/s/AKfycbzZK83bM-w2k-A6vz0bJVQIzra8gyKj2WvIa3_LfplqooGdDITT79IZAkh0NZ8pgsxk/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(datas => {
    // console.log(data[0]);
    let length = datas.length;
    let j1=0;



    let data=[];
    let data1 = [];



    for(var i=0;i<length;i++){
        if(datas[i].tier==4){
            data[0]=datas[i];
        }
    }

    for(var i=0;i<length;i++){
        if(datas[i].tier!=4){
            data1[j1]=datas[i];
            j1++;
        }
    }

    
    const html = data.map((img, i) =>{
        return `
        <div class="container px-4 px-lg-5 my-5" >
                <div class="row gx-4 gx-lg-5 align-items-center">
                
                    <div class="col-md-6">
                    <img class="card-img-top mb-5 mb-md-0" style="border-radius:25px" src="${data[0].Picture}" alt="${data[0].Car_made}.png" /></div>
                    <div class="col-md-6">
                        <h1 class="display-5 fw-bolder">${data[0].Car_made} ${data[0].Model_Name}</h1>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="${data[i].Link}">Download</a></div>
                            </div>
                    </div>
                </div>
            </div>`;
    }).join('');
    document.querySelector("#limited").insertAdjacentHTML("afterbegin", html);

    const html1 = data1.map((img, i) =>{
        return `
        <div class="col mb-5" onclick="clicksound.play();">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${data1[i].Picture}" alt="${data1[i].Car_made}.png" />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${data1[i].Car_made} ${data1[i].Model_Name}</h5>
                                    <!-- Product price-->
                                </div>
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="${data1[i].Link}">Download</a></div>
                            </div>
                            </div>
                        </div>
                    </div>`
    }).join('');
    document.querySelector("#one").insertAdjacentHTML("afterbegin", html1);
})
