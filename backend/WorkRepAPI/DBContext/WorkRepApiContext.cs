using System;
using MySql.Data.MySqlClient;

namespace WorkRepAPI.DBContext
{
    public class WorkRepApiContext
    {
        private string cadena = "server=localhost;database=pps_database;user=root;password=azul";
        private MySqlConnection conectar;

        public WorkRepApiContext()
        {
            conectar = new MySqlConnection(cadena);
        }

        public void OpenConnection()
        {
            try
            {
                conectar.Open();
                Console.WriteLine("Conexión exitosa");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error al abrir la conexión: " + ex.Message);
            }
        }

        public void CloseConnection()
        {
            if (conectar != null && conectar.State == System.Data.ConnectionState.Open)
            {
                conectar.Close();
                Console.WriteLine("Conexión cerrada");
            }
        }

        public void ExecuteQuery(string query)
        {
            try
            {
                MySqlCommand comando = new MySqlCommand(query, conectar);
                comando.ExecuteNonQuery();
                Console.WriteLine("Consulta ejecutada correctamente");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error al ejecutar la consulta: " + ex.Message);
            }
        }
    }
}
