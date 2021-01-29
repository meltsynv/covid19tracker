const coronaAPIcall = (searchText) => {
  const API = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=covid-19-germany-landkreise&q=${searchText}&facet=last_update&facet=name&facet=rs&facet=bez&facet=bl`;
  return fetch(API)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData.records[0].fields;
    })
    .catch((error) => {
      // handle your errors her
    });
};

export default coronaAPIcall;
