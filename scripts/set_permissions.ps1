$vitePath = (Get-Location).Path + '\node_modules\.bin\vite'
icacls $vitePath /grant "Everyone:(RX)"
dir $vitePath > vite_permissions.txt # Add this line to check permissions
