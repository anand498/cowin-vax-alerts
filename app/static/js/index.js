
    

    var districtbyStates={'Andaman and Nicobar Islands': ['Nicobar', 'North and Middle Andaman', 'South Andaman'], 
    'Andhra Pradesh': ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Prakasam', 'Sri Potti Sriramulu Nellore', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR District, Kadapa (Cuddapah)'], 
    'Arunachal Pradesh': ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Itanagar Capital Complex', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'], 
    'Assam': ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup Metropolitan', 'Kamrup Rural', 'Karbi-Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'], 
    'Bihar': ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'], 
    'Chandigarh': ['Chandigarh'], 'Chhattisgarh': ['Balod', 'Baloda bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela Pendra Marwahi ', 'Janjgir-Champa', 'Jashpur', 'Kanker', 'Kawardha', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'], 
    'Dadra and Nagar Haveli': ['Dadra and Nagar Haveli'], 'Daman and Diu': ['Daman', 'Diu'], 'Delhi': ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'], 'Goa': ['North Goa', 'South Goa'],
    'Gujarat': ['Ahmedabad', 'Ahmedabad Corporation', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Bhavnagar Corporation', 'Botad', 'Chhotaudepur', 'Dahod', 'Dang', 'Devbhumi Dwaraka', 'Gandhinagar', 'Gandhinagar Corporation', 'Gir Somnath', 'Jamnagar', 'Jamnagar Corporation', 'Junagadh', 'Junagadh Corporation', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Rajkot Corporation', 'Sabarkantha', 'Surat', 'Surat Corporation', 'Surendranagar', 'Tapi', 'Vadodara', 'Vadodara Corporation', 'Valsad'], 
    'Haryana': ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurgaon', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'], 'Himachal Pradesh': ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
    'Jammu and Kashmir': ['Anantnag', 'Bandipore', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'],'Jharkhand': ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahebganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'], 
    'Karnataka': ['Bagalkot', 'Bangalore Rural', 'Bangalore Urban', 'BBMP', 'Belgaum', 'Bellary', 'Bidar', 'Chamarajanagar', 'Chikamagalur', 'Chikkaballapur', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Gulbarga', 'Hassan', 'Haveri', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 'Ramanagara', 'Shimoga', 'Tumkur', 'Udupi', 'Uttar Kannada', 'Vijayapura', 'Yadgir'], 'Kerala': ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'], 'Ladakh': ['Kargil', 'Leh'],'Lakshadweep': ['Agatti Island', 'Lakshadweep'], 
    'Madhya Pradesh': ['Agar', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'], 
    'Maharashtra': ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad ', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'], 
    'Manipur': ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'], 'Meghalaya': ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri-Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'], 
    'Mizoram': ['Aizawl East', 'Aizawl West', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Serchhip', 'Siaha'],  'Nagaland': ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'], 'Odisha': ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khurda', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'], 
    'Puducherry': ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'], 'Punjab': ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozpur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Pathankot', 'Patiala', 'Rup Nagar', 'Sangrur', 'SAS Nagar', 'SBS Nagar', 'Sri Muktsar Sahib', 'Tarn Taran'], 
    'Rajasthan': ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur I', 'Jaipur II', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'], 'Sikkim': ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'], 
    'Tamil Nadu': ['Aranthangi', 'Ariyalur', 'Attur', 'Chengalpet', 'Chennai', 'Cheyyar', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Kovilpatti', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Palani', 'Paramakudi', 'Perambalur', 'Poonamallee', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Sivakasi', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi (Tuticorin)', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'], 
    'Telangana': ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Kumuram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal(Rural)', 'Warangal(Urban)', 'Yadadri Bhuvanagiri'], 
    'Tripura': ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
    'Uttar Pradesh': ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Badaun', 'Baghpat', 'Bahraich', 'Balarampur', 'Ballia', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnour', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 
    'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'], 
    'Uttarakhand': ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
    'West Bengal': ['Alipurduar District', 'Bankura', 'Basirhat HD (North 24 Parganas)', 'Birbhum', 'Bishnupur HD (Bankura)', 'Cooch Behar', 'COOCHBEHAR', 'Dakshin Dinajpur', 'Darjeeling', 'Diamond Harbor HD (S 24 Parganas)', 'East Bardhaman', 'Hoogly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'Nandigram HD (East Medinipore)', 'North 24 Parganas', 'Paschim Medinipore', 'Purba Medinipore', 'Purulia', 'Rampurhat HD (Birbhum)', 'South 24 Parganas', 'Uttar Dinajpur', 'West Bardhaman']}

 

function makeSubmenu(value) {
    if(value.length==0) 
        document.getElementById("districtSelect").innerHTML = "<option></option>";
    else {
        var districtlist = "";
        for(districtId in districtbyStates[value]) {
            districtlist+="<option>"+districtbyStates[value][districtId]+"</option>";
        }
        document.getElementById("districtSelect").innerHTML = districtlist;
        }
    }

function displaySelected() 
{ 
    var state = document.getElementById("stateSelect").value;
    var district = document.getElementById("districtSelect").value;
    alert(state+"\n"+district);
}


function resetSelection() {
    document.getElementById("stateSelect").selectedIndex = 0;
    document.getElementById("districtSelect").selectedIndex = 0;
}



function subscribeUser() {
    UserAction()
    return false;
}
function unsubscribeUser(){
    deleteUser()
    return false;
}

async function deleteUser()
{
    
    var emailid = document.getElementById('unsubscribe-customer-emailid').value;
    if (!emailid.replace(/\s/g, '').length) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email entered is Invalid',
         } )
        return false;
    }
    let response=  await fetch("/unsubscribeMail", {
        method: "DELETE",
        body: JSON.stringify({
            "email":emailid,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })

        if (response.status=='200') { 
            let json =  await response.json();
            Swal.fire(
                'Your request has been processed.',
                'You will recieve a confirmation mail shortly.',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email ID does not exist in our records.',
            })
        }
        

}

async function UserAction(){
   
    var name=document.getElementById("customer-name").value;
    var emailid = document.getElementById('customer-emailid').value;
    var state = document.getElementById('stateSelect').value;
    var district = document.getElementById('districtSelect').value;
    if (!name.replace(/\s/g, '').length) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Name entered is Invalid',
         } )
        return false;
    }
    if (!emailid.replace(/\s/g, '').length) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email entered is Invalid',
         } )
        return false;
    }
    
    
    if(document.getElementById('below45').checked) {
        agegroup="below45";
    }
    else if(document.getElementById('above45').checked) {
                agegroup="above45";
    }    
    
    let response=  await fetch("/vax-alerts", {
    method: "POST",
    body: JSON.stringify({
        "name":name,
        "email":emailid,
        "state": state,
        "district": district,
        "agegroup": agegroup
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    if (response.status=='201') { 
        let json =  await response.json();
        Swal.fire({
            icon: 'success',
            title: 'You have registered for Vaccination Alerts!',
            text: 'You will recieve a confirmation mail shortly.',
        })
    } else if(response.status=='403') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have only registered for a similar request!',
        })
    }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong',
            })
        }
          
    

    };

    

   