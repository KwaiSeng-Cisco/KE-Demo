 function current_time(){
            var date = Date();
            document.getElementById("date").innerHTML = date;
            console.debug("Getting current Time")
        }


        function printhost(){
            var host = location.host;
            document.getElementById("host").innerHTML = host;
        }

        function printhostname(){
            var hostname = location.hostname;
            document.getElementById("hostname").innerHTML = "My IP Address : " + hostname;
        }
            