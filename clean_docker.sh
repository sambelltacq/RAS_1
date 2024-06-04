sudo docker rm $(docker ps -a -q) -f
sudo docker volume prune -f