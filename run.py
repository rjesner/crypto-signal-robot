from app import app
import os
import shutil


def copy_files(src: str, dest: str):
    if not os.path.exists(dest):
        os.makedirs(dest)
    files: list[str] = [f for f in os.listdir(src) if os.path.isfile(os.path.join(src, f))]
    for file in files:
        src_path: str = os.path.join(src, file)
        dest_path: str = os.path.join(dest, file)
        shutil.copy2(src_path, dest_path)


def copy_specific_folder(src_folder: str, dest_folder: str):
    if not os.path.exists(dest_folder):
        os.makedirs(dest_folder)
    folder_name: str = os.path.basename(src_folder)
    dest_path: str = os.path.join(dest_folder, folder_name)
    shutil.copytree(src_folder, dest_path)


static_folder: str = 'app/static'
if os.path.exists(static_folder) and os.path.isdir(static_folder):
    shutil.rmtree(static_folder)
if not os.path.exists(static_folder):
    os.mkdir(static_folder)
    react_build_folder: str = 'app/frontend/build'
    if not os.path.exists(react_build_folder):
        print('Build the React frontend first!')
        exit()
    copy_files(react_build_folder, static_folder)
    react_build_static_folder: str = react_build_folder + '/static'

    css_path: str = react_build_static_folder + '/css'
    js_path: str = react_build_static_folder + '/js'
    media_path: str = react_build_static_folder + '/media'

    if os.path.exists(css_path):
        copy_specific_folder(css_path, static_folder)
    if os.path.exists(js_path):
        copy_specific_folder(js_path, static_folder)
    if os.path.exists(media_path):
        copy_specific_folder(media_path, static_folder)


app.run(host='127.0.0.1', port=80, debug=True)
