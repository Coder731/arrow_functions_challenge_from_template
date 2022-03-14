// convert string to variable name
                        // https://stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
                        function SetToString(varString) {
                            var newValue = "string";
                            eval(varString + " = " + "'" + newValue + "'");
                          }                          
                        // end converter