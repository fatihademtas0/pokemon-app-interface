const API_URL = 'https://localhost:7007/api'; // API URL'nizi buraya yazın

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    
    // Eğer response başarılı değilse hata fırlat
    if (!response.ok) {
      throw new Error('API Hatası: ' + response.statusText);
    }

    const data = await response.json(); // JSON formatında veri döndür
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
