import {PagePaths, PageTemplatesPaths} from '../folders_path/pages_paths.js';
import { CustomFile } from '../common/files_actions.js';
import { CustomFolder } from '../common/folders_actions.js';
import { FileName } from  '../common/filename_actions.js';


export class ReactPage
{
  constructor(page_name)
  {

    this.filename                   =  new FileName();
    this.lower_page_name           =  this.filename.lowercaseFirstLetter(page_name);
    this.capital_page_name         =  this.filename.capitalizeFirstLetter(page_name);
    this.folders_paths             =  PagePaths;
    this.templates_paths           =  PageTemplatesPaths;
  }

  generate_pages_files()
  {
    for( var filename of Object.keys(this.folders_paths))
    {

      let new_folder_path = this.folders_paths[filename];
      this.create_file(filename, new_folder_path);
    }
  }


  async create_file(filename, new_folder_path)
  {
    let customFile      = new CustomFile();
    let new_file_path   = new_folder_path+`/${this.capital_page_name}.js`;
    customFile.create_file( new_file_path );
    customFile.copy_file( this.templates_paths[filename], new_file_path );

    if( filename !='importFiles')
    {
      await this.filename.replace_text(new_file_path, '/Name/name', `/pages/${this.capital_page_name}`);
      await this.filename.replace_text(new_file_path, 'PageName', `${this.capital_page_name}`);
    }
    else
    {
      await this.filename.replace_text(new_file_path, '/Component_or_Page/name', `/components/${this.capital_page_name}`);
      await this.filename.replace_text(new_file_path, '/Component_or_Page/Name', `/components/${this.lower_page_name}`);
    }

  }

}
