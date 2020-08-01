export const fetchMembers = () => fetch('/api/members')
.then(response => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
})
.catch(err => console.log(err));