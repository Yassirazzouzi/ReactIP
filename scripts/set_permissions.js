import { join } from 'path';
import { chmod, writeFile } from 'fs/promises';
import { platform } from 'os';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Path to vite binary
const vitePath = join(projectRoot, 'node_modules', '.bin', platform() === 'win32' ? 'vite.cmd' : 'vite');

async function setPermissions() {
  try {
    console.log(`Setting permissions for Vite at: ${vitePath}`);
    
    // Set executable permissions
    if (platform() === 'win32') {
      // On Windows, use icacls
      try {
        execSync(`icacls "${vitePath}" /grant Everyone:(RX)`);
        console.log('Permissions set using icacls');
      } catch (error) {
        console.error('Error using icacls:', error.message);
        // Fallback to Node.js chmod
        await chmod(vitePath, 0o755);
        console.log('Permissions set using Node.js chmod');
      }
    } else {
      // On Unix-like systems, use chmod
      await chmod(vitePath, 0o755);
      console.log('Permissions set using chmod');
    }
    
    // Write permissions info to file
    let permissionInfo = '';
    
    try {
      if (platform() === 'win32') {
        permissionInfo = execSync(`dir "${vitePath}"`).toString();
      } else {
        permissionInfo = execSync(`ls -la "${vitePath}"`).toString();
      }
    } catch (error) {
      permissionInfo = `Failed to get permissions: ${error.message}`;
    }
    
    await writeFile(join(projectRoot, 'vite_permissions.txt'), permissionInfo);
    console.log('Permissions info written to vite_permissions.txt');
    
    console.log('Permissions set successfully');
  } catch (error) {
    console.error('Error setting permissions:', error);
    process.exit(1);
  }
}

setPermissions();
