import {PagePaths, PageTemplatesPaths} from '../folders_path/pages_paths.js';
import { CustomFile } from '../common/files_actions.js';
import { CustomFolder } from '../common/folders_actions.js';
import { FileName } from  '../common/filename_actions.js';


export class ReactPage
{
  constructor(page_name)
  {

    let filename                   =  new FileName();
    this.lower_page_name           =  filename.lowercaseFirstLetter(component_name);
    this.capital_page_name         =  filename.capitalizeFirstLetter(component_name);
    this.folders_paths             =  PagePaths;
    this.templates_paths           =  PageTemplatesPaths;
  }

  generate_pages_files()
  {
    for( var filename of Object.keys(this.folders_paths))
    {

      let new_folder_path = this.create_folder(filename);
      this.create_file(filename, new_folder_path);
    }
  }

  create_folder(filename)
  {
    let new_folder_path = '';
    if(filename != 'components')
    {
      let customFolder    = new CustomFolder();
      new_folder_path     = this.folders_paths[filename]+`/${this.lower_page_name}`;
      customFolder.create_folder(new_folder_path);
    }
    else
    {
      new_folder_path = this.folders_paths[filename];
    }

    return new_folder_path;
  }

  create_file(filename, new_folder_path)
  {
    let customFile      = new CustomFile();
    let new_file_path   = new_folder_path+`/${this.capital_page_name}.js`;
    customFile.create_file( new_file_path );
    customFile.copy_file( this.templates_paths[filename], new_file_path );
    this.filename.replace_text(new_file_path, '/Name/name.js', `/${this.lower_page_name}/${this.capital_page_name}.js`);
    this.filename.replace_text(new_file_path, 'PageName', `${this.capital_page_name}`);
  }
  
}
