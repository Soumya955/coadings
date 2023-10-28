export function datePipe(dob) {
    const date = new Date(dob);
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  }