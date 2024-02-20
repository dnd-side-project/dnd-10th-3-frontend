
export const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');

    link.download = filename;
    link.href = url;
      
    link.click();
};