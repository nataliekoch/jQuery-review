
$.ajax("data.json").then(function(response){
   var it = 0;

    for(it; it < response.length; it++){
        var $content = '';
        $id = response[it].id;
        $gender = response[it].gender;
        $firstName = response[it].first_name;
        $lastName = response[it].last_name;

        if (response[it].email == undefined){
            $email = "No email";
        }
        else {
            $email = response[it].email;
        }

        $content =
            "<div class='people'>" +
                "ID: " + $id + '<br/>' +
                "gender: " + $gender + '<br/>' +
                "First Name: " + $firstName + '<br/>' +
                "Last Name: " + $lastName + '<br/>' +
                $email + '<br/> <br/>' +
            "</div>";

        console.log($content);
        $(".content").append($content);


    }
});