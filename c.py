import os.path as op

from adb import adb_commands
from adb import sign_m2crypto


# KitKat+ devices require authentication
signer = sign_m2crypto.M2CryptoSigner(
    op.expanduser('~/.android/adbkey'))
# Connect to the device
device = adb_commands.AdbCommands()
device.ConnectDevice(
    rsa_keys=[signer])
# Now we can use Shell, Pull, Push, etc!
for i in xrange(10):
  print(device.Shell('echo %d' % i))