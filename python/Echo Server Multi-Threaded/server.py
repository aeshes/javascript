import socket                                                                   
import threading                                                                
                                                                                
def client_thread(conn):                                                        
        while True:                                                             
                data = conn.recv(1024)                                          
                if not data or data == 'close': break                           
                conn.send(data)                                                 
        conn.close()                                                            
                                                                                
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)                        
                                                                                
sock.bind(('0.0.0.0', 2222))                                                    
sock.listen(10)                                                                 
                                                                                
while True:                                                                     
        conn, addr = sock.accept()                                              
                                                                                
        thr = threading.Thread(target=client_thread, args=(conn,))
		thr.start()